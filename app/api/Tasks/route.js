import { connectToDb } from "@/libs/db"
import Task from "../../../(models)/Task"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    await connectToDb()
    const body = await req.json()
    const taskData = body.formData
    await Task.create(taskData)
    return NextResponse.json({ message: "Task created" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 })
  }
}

export async function GET(req) {
  try {
    await connectToDb()
    const userEmail = req.nextUrl.searchParams.get("email")
    const tasks = await Task.find({ user: userEmail }).sort({
      priority: 1,
    })
    return NextResponse.json({ tasks }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 })
  }
}
