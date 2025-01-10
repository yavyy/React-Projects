import React, { useState } from 'react'
import './styles.css'

const data = [
  {
    id: 1,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. If you’re not satisfied with your purchase, you can return the product in its original condition within 30 days for a full refund or exchange. Please refer to our return policy page for more details."
  },
  {
    id: 2,
    question: "How can I track my order?",
    answer: "Once your order is shipped, you’ll receive an email with the tracking details. You can also log in to your account on our website and navigate to the My Orders section to track your shipment."
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally to most countries. Shipping costs and delivery times may vary depending on your location. You can check the shipping options and fees at checkout."
  },
  {
    id: 4,
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team via email at support@company.com or call us at +1 123-456-7890. We are available Monday to Friday, 9 AM to 5 PM (local time)."
  },
]

function Accordion() {

  const [selected, setSelected] = useState([]);
  const [multiSelected, setMultiSelected] = useState(false)

  const handleSelected = (itemId) => {
    if(multiSelected) {
      setSelected((prev) => prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId])
    } else {
      setSelected((prev) => prev.includes(itemId) ? [] : [itemId])
    }
  }

  return (
    <div className='container'>
      <button onClick={() => setMultiSelected((prev) => !prev)} className='mutliSelectBtn'>{multiSelected ? "Disable MultiSelection" : "Enable MultiSelection"}</button>
      {
        data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div key={index} className='card' onClick={() => handleSelected(item.id)}>
                <div className='content'>
                  <h3 className='accQst'>{item.question}</h3>
                  <p>+</p>
                </div>
                {selected.includes(item.id) ? (
                  <p className='accAnsw'>{item.answer}</p>
                ) : null}
              </div>
            )
          })
        ) : null
      }
    </div>
  )
}

export default Accordion