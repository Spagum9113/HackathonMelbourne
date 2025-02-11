"use client"

import { useState } from "react"

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
})

const [submitted, setSubmitted] = useState(false)

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
    }
}