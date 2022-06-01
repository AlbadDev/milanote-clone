import style from '../styles/TestimonialSlice.module.scss'


const TestimonialSlice = ({testimonialResult}) => {



    return (
        <>
          {testimonialResult.map(data => (
              <h2>{data.userName}</h2>
          ))}
        </>
    )
}


export default TestimonialSlice