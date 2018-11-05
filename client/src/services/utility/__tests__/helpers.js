import axios from 'axios';

jest.mock('axios');

describe('axios request', ()=> {
    it('returns successful response', () => {
        axios.get.mockImplementation(() => ({data: {}}))
    });
});


  
  
