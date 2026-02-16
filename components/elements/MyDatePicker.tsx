
'use client'
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function MyDatePicker({ form, selectedDate, onChange }: any) {
	const [startDate, setStartDate] = useState<Date | null>(new Date())

	const dateToUse = selectedDate !== undefined ? selectedDate : startDate

	const handleChange = (date: Date | null) => {
		if (onChange) {
			onChange(date)
		}
		setStartDate(date)
	}

	return (
		<>
			<DatePicker
				selected={dateToUse}
				onChange={handleChange}
				className={!form ? "search-input datepicker" : "form-control calendar-date"}
			/>
		</>
	)
}
