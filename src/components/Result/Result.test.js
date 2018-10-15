import React from 'react'
import { shallow, mount } from 'enzyme'
import Result from './Result';

const props = {
  result: {
    title: "The Twitter Book",
    infoLink: "https://play.google.com/store/books/details?id=Jy1jfJm0HVIC&source=gbs_api",
    authors: ["Tim O'Reilly"],
    description: "Twitter is not just for talking about your breakfast anymore. It’s",
    publisher: "O'Reilly Media, Inc.",
    imageLinks: {
      smallThumbnail : "http://books.google.com/books/content?id=Jy1jfJm0H…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    }
  }
}

describe('Result Component', () => {
  it('renders without crashing', () => {
    let result = Object;
    shallow(<Result result={result}/>);
  });

  it('Given result data, renders the result title', () => {
    const wrapper = mount(<Result {...props} />);
    expect(wrapper.find('.author').text()).toBe("Tim O'Reilly");
  });

  it('Given result data, renders the result title', () => {
    const wrapper = mount(<Result {...props} />);
    expect(wrapper.find('.title').text()).toBe("The Twitter Book");
  });

  it('Given result data, renders the result title', () => {
    const wrapper = mount(<Result {...props} />);
    expect(wrapper.find('.search-snippet').text()).toBe("Twitter is not just for talking about your breakfast anymore. It’s...");
  });
});