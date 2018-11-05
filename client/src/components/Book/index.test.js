import React from 'react'
import { shallow, mount } from 'enzyme'
import Book from './index';

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

describe('Book Component', () => {
  it('renders without crashing', () => {
    let book = Object;
    shallow(<Book book={book}/>);
  });

  it('Given result data, renders the result author', () => {
    const wrapper = mount(<Book {...props} />);
    expect(wrapper.find('.author').text()).toBe("Tim O'Reilly");
  });

  it('Given result data, renders the result title', () => {
    const wrapper = mount(<Book {...props} />);
    expect(wrapper.find('.title').text()).toBe("The Twitter Book");
  });

  it('Given result data, renders the result description', () => {
    const wrapper = mount(<Book {...props} />);
    expect(wrapper.find('.search-snippet').text()).toBe("Twitter is not just for talking about your breakfast anymore. It’s...");
  });

  it('Given result data, renders the result image', () => {
    const wrapper = mount(<Book {...props} />);
    expect(wrapper.find("img").prop("src")).toEqual("http://books.google.com/books/content?id=Jy1jfJm0H…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
  });
});