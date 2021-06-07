import React from 'react'
import { CompCC } from './CompCC'
import CompF from './CompF'
import { UProvider } from './userContext'

export const CompP = () => {
    return (
        <div>
          
           <p>1.Create the context</p>
           <p>2.Provide a context value</p>
           <p>3.Consume the context value</p>
           <p>i am comp P as parent</p>
            <UProvider value = "raghveeeee">
              {/* <CompF/> */}
              <CompCC/>
            </UProvider>
        </div>
    )
}
