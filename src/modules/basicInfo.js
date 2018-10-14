export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
    name: {
        firstName: 'Joey', 
        lastName: 'Zhao',
        displayName: 'Joey Zhao',
    },
    email: {
        address: 'joey.zhao.nj@gmail.com',
        subject: 'Hello%20From%20Portfolio',
    },
    homepage: {
        address: 'zhaoyi2016.github.io',
    },
    phone: {
        hashStyle: '848-252-1853',
    },
    location: {
        sampleLocation: 'New Jersey, US',
    },
    coverPageTitle: 'Designer & Developer',
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
