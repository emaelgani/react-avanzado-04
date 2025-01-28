import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {

        //Si tengo el isControlled es porque estoy mandando por parámetro el onChange.
        if( isControlled.current ){
          return onChange!({count: value, product: product})
        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
    }
    
    useEffect(() => {
      setCounter(value)
    }, [value])
    

  return {
    counter,
    increaseBy

  }
}
