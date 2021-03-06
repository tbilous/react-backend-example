import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import { map } from 'lodash';

import BlogItem from './ItemShort';

const BlogList = ({items, likeHandler}) => (
  <Item.Group>
    {
      map(items, (item) =>
        <BlogItem key={item.id}
          {...item}
          likeHandler={ () => likeHandler(item.id) }
        />
      )
    }
  </Item.Group>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  likeHandler: PropTypes.func
};

export default BlogList;
