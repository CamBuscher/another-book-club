import React from 'react';
import { BooksDisplay } from './BooksDisplay';
import { shallow, mount } from 'enzyme';

describe('BooksDisplay', () => {
  let wrapper
  let mockprops

  it('should match snapshot when given books', () => {
    mockprops = {
      books: [{
        title: 'Annihilation',
        authors: ['Jeff'],
        imageLinks: {
          thumbnail: 'book.jpg'
        }
      }],
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when given no books', () => {
    mockprops = {
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be an empty div if no books given', () => {
    mockprops = {books: []};
    wrapper = shallow(<BooksDisplay {...mockprops}/>);

    const bookPreviews = wrapper.find('.bookPreview');

    expect(bookPreviews).toHaveLength(0)
  });

  it('should have a bookPreview div if books received', () => {
    mockprops = {
      books: [{
        title: 'Annihilation',
        authors: ['Jeff'],
        imageLinks: {
          thumbnail: 'book.jpg'
        }
      }],
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    const bookPreviews = wrapper.find('.bookPreview');

    expect(bookPreviews).toHaveLength(1);
  });

  it('should show a no-image icon if given book has no image', () => {
    mockprops = {
      books: [{
        title: 'Annihilation',
        authors: ['Jeff']
      }],
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    const image = wrapper.find('.bookPreview').find('img');

    expect(image.props().src).toEqual('https://www.freeiconspng.com/uploads/no-image-icon-23.jpg');
  });

  it('should show image link if given a book image', () => {
    mockprops = {
      books: [{
        title: 'Annihilation',
        authors: ['Jeff'],
        imageLinks: {
          thumbnail: 'book.jpg'
        }
      }],
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    const image = wrapper.find('.bookPreview').find('img');

    expect(image.props().src).toEqual('book.jpg');
  });

  it('should show no author available if not given an author', () => {
    mockprops = {
      books: [{
        title: 'Annihilation',
        imageLinks: {
          thumbnail: 'book.jpg'
        }
      }],
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    const author = wrapper.find('.bookPreview').find('h5');

    expect(author.text()).toEqual('Author: Author not available');
  });

  it('should show author name if given an author', () => {
    mockprops = {
      books: [{
        title: 'Annihilation',
        authors: ['jeff'],
        imageLinks: {
          thumbnail: 'book.jpg'
        }
      }],
      currentClub: {
        books: []
      },
      addBookToClub: jest.fn()
    };
    wrapper = shallow(<BooksDisplay {...mockprops} />);

    const author = wrapper.find('.bookPreview').find('h5');

    expect(author.text()).toEqual('Author: jeff');
  });
});
