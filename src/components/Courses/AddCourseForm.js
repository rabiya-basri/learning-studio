import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { startAddCourse } from '../../actions/courseAction'

const AddCourseForm = (props) => {
    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [isDelete, setIsDelete] = useState('')
    const [category, setCategory] = useState('')
    const [validity, setValidity] = useState('')
    const [level, setLevel] = useState('')
    const [author, setAuthor] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const courseCategory=['HTML','CSS','JavaScript','reactJs','nodeJs','expressJs','mongodb']
    const courseLevel = ['beginner', 'intermediate', 'expert']
    
    const handelInput = (e) => {
        const attribute = e.target.name
        if (attribute === 'name') {
            setName(e.target.value)
        } else if (attribute === 'description') {
            setDescription(e.target.value)
        } else if (attribute === 'duration') {
            setDuration(e.target.value)
        } else if (attribute === 'date') {
            setReleaseDate(e.target.value)
        } else if (attribute === 'category') {
            setCategory(e.target.value)
        } else if (attribute === 'validity') {
            setValidity(e.target.value)
        } else if (attribute === 'level') {
            setLevel(e.target.value)
        } else if (attribute === 'author') {
            setAuthor(e.target.value)
        }
    }
    const handelCheckBox = (e) => {
        setIsDelete(e.target.checked)
    }

    //course validations
    const runValidation = () => {
        //name
        if (name.trim().length === 0) {
           errors.name='Coursename cannot be blank' 
        }
        //description
        if (description.trim().length === 0) {
            errors.description='description cannot be blank'
        }
        //duration
        if (duration.trim().length === 0) {
            errors.duration='duration cannot be blank'
        }
        //author
        if (author.trim().length === 0) {
            errors.author='author cannot be blank'
        }
    }

    const formSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                name,
                description,
                duration,
                releaseDate,
                isDelete,
                category,
                validity,
                level,
                author
            }
            console.log(formData)
            dispatch(startAddCourse(formData))
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <form onSubmit={ formSubmit}>
                <input type='text' value={name} name='name' onChange={handelInput} placeholder='CourseName' /><br />
                {formErrors.name && <span>{ formErrors.name}</span>}<br/>
                <textarea value={ description} name='description' onChange={ handelInput} placeholder='course Description' /><br />
                {formErrors.description && <span>{ formErrors.description}</span>}<br/>
                <input type='number' value={duration} name='duration' onChange={handelInput} placeholder='course Duration' /><br />
                {formErrors.duration && <span>{ formErrors.duration}</span>}<br/>
                <input type='date' value={releaseDate} name='date' onChange={handelInput} /><br />
                <label>isDelete</label><input type='checkbox' value={isDelete} onChange={ handelCheckBox} name='isDeleted'/><br />
                <select value={ category} name='category' onChange={ handelInput}>
                    <option>Select category</option>
                    {courseCategory.map((category,index) => {
                        return (
                            <option key={index}>{ category}</option>
                        )
                    })}
                </select><br/>
                <input type='date' name='validity' value={validity} onChange={ handelInput} placeholder='course validity' /><br />
                <select value={ level} name='level' onChange={ handelInput}>
                    <option>select level</option>
                    {courseLevel.map((level,index) => {
                        return (
                            <option key={ index}>{ level}</option>
                        )
                    })}
                </select><br/>
                <input type='text' value={author} name='author' onChange={ handelInput} placeholder='author' /><br />
                {formErrors.author && <span>{ formErrors.author}</span>}<br/>
                <input type='submit' value='Add Course' />
            </form>
        </div>
    )
}
export default AddCourseForm