'use client'
import { ChangeEvent, useState } from "react"
import { Car } from "@/src/types"

export interface Filter {
	names: string[]
	fuel_type: string[]
	amenities: string[]
	locations: string[]
	ratings: number[]
	car_type: string[]
}

type SortCriteria = "name" | "price" | "rating"

const useCarFilter = (carsData: Car[]) => {
	const [filter, setFilter] = useState<Filter>({
		names: [],
		fuel_type: [],
		amenities: [],
		locations: [],
		ratings: [],
		car_type: [],
	})
	const [sortCriteria, setSortCriteria] = useState<SortCriteria>("name")
	const [itemsPerPage, setItemsPerPage] = useState<number>(10)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const uniqueNames = [...new Set(carsData.map((car) => car.name))]
	const uniqueFuelTypes = [...new Set(carsData.map((car) => car.fuel_type))]
	const uniqueAmenities = [...new Set(carsData.map((car) => car.amenities || ''))]
	const uniqueLocations = [...new Set(carsData.map((car) => car.location))]
	const uniqueRatings = [...new Set(carsData.map((car) => car.rating || 0))]
	const uniqueCarTypes = [...new Set(carsData.map((car) => car.car_type || ''))]

	const filteredCars = carsData.filter((car) => {
		return (
			(filter.names.length === 0 || filter.names.includes(car.name)) &&
			(filter.fuel_type.length === 0 || filter.fuel_type.includes(car.fuel_type ?? "")) &&
			(filter.amenities.length === 0 || filter.amenities.some(a => car.amenities?.includes(a))) &&
			(filter.locations.length === 0 || filter.locations.includes(car.location)) &&
			(filter.ratings.length === 0 || filter.ratings.includes(car.rating ?? 0)) &&
			(filter.car_type.length === 0 || (car.car_type && filter.car_type.includes(car.car_type ?? "")))
		)
	})

	const sortedCars = [...filteredCars].sort((a, b) => {
		if (sortCriteria === "name") {
			return a.name.localeCompare(b.name)
		} else if (sortCriteria === "price") {
			return a.price_per_day - b.price_per_day
		} else if (sortCriteria === "rating") {
			return (b.rating || 0) - (a.rating || 0)
		}
		return 0
	})

	const totalPages = Math.ceil(sortedCars.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const paginatedCars = sortedCars.slice(startIndex, endIndex)

	const handleCheckboxChange = (field: keyof Filter, value: string | number) => (e: ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		setFilter((prevFilter) => {
			const values = prevFilter[field] as (string | number)[]
			if (checked) {
				return { ...prevFilter, [field]: [...values, value] }
			} else {
				return {
					...prevFilter,
					[field]: values.filter((item) => item !== value),
				}
			}
		})
	}

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortCriteria(e.target.value as SortCriteria)
	}

	const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setItemsPerPage(Number(e.target.value))
		setCurrentPage(1)
	}

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handleClearFilters = () => {
		setFilter({
			names: [],
			fuel_type: [],
			amenities: [],
			locations: [],
			ratings: [],
			car_type: [],
		})
		setSortCriteria("name")
		setItemsPerPage(4)
		setCurrentPage(1)
	}

	const startItemIndex = (currentPage - 1) * itemsPerPage + 1
	const endItemIndex = Math.min(startItemIndex + itemsPerPage - 1, sortedCars.length)

	return {
		filter,
		setFilter,
		sortCriteria,
		setSortCriteria,
		itemsPerPage,
		setItemsPerPage,
		currentPage,
		setCurrentPage,
		uniqueNames,
		uniqueFuelTypes,
		uniqueAmenities,
		uniqueLocations,
		uniqueRatings,
		uniqueCarTypes,
		filteredCars,
		sortedCars,
		totalPages,
		startIndex,
		endIndex,
		paginatedCars,
		handleCheckboxChange,
		handleSortChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		startItemIndex,
		endItemIndex,
	}
}

export default useCarFilter
