import Task from "@/(models)/Task"
import { NextResponse } from "next/server"

export async function DELETE(req, { params }) {
  try {
    const { id } = params
    console.log('ID', id)
    await Task.findByIdAndDelete(id)
    return NextResponse.json({ message: "Task deleted" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.toString() },
      { status: 500 }
    )
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params
    const task = await Task.findById(id)
    return NextResponse.json({ task }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.toString() },
      { status: 500 }
    )
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params
    const body = await req.json() 
    const taskData = body.formData
    await Task.findByIdAndUpdate(id, taskData) 
    return NextResponse.json({ message: "Task updated" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.toString() },
      { status: 500 }
    )
  }
}
