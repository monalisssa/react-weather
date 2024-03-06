

export const searchBarDarkStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#1D282A',
      minWidth: '25vw',
      fontSize: '15px',
     }),
    menuList:  (base, state) => ({
      backgroundColor: '#1D282A',
    }),
    option: (base, state) => ({
      padding: "4px 10px 5px",
      backgroundColor: state.isFocused ? '#2395FF' : '#202020',
      fontSize: '14px',
      cursor: 'pointer',
      color: '#ccc',
    }),
    input:(base) => ({
      ...base,
      color: '#fff',
      
    }),
    singleValue:(base) => ({
      
        ...base,
        color: '#fff',  
    }),

    indicatorsContainer:(base, state) => ({
      
        ...base,
        cursor: 'pointer',  
    })
}

export const searchBarLightStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'rgb(255,255,255,0.6)',
        minWidth: '25vw',
        fontSize: '15px',
    }),
    option: (base, state) => ({
        padding: "4px 10px 5px",
        backgroundColor: state.isFocused ? '#2395FF' : '#fff',
        fontSize: '14px',
        cursor: 'pointer',
        color: '#000',
    }),
    input:(base) => ({
        ...base,
        color: '#000',

    }),
    singleValue:(base) => ({

        ...base,
        color: '#000',
    }),

    indicatorsContainer:(base, state) => ({

        ...base,
        cursor: 'pointer',
    })
}
