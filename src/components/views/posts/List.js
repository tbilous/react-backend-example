import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import BlogList from 'components/widgets/blog/List';
import BlogItem from 'components/widgets/blog/ItemShort';
import PieChart from 'components/widgets/PieChart';
import Pagination from 'components/widgets/Pagination';
import SearchForm from 'components/widgets/SearchForm';
import RightNavigation from 'components/layouts/elements/RightNavigation';

import Helmet from 'react-helmet';

const BlogPage = ({
  items, currentPageNumber, totalPages,
  pageChangeHandler, handleKeyDown, actions
}) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={12}>
        <BlogList items={items} likeHandler={actions.likeEntry} />
        <Pagination
           totalItems={totalPages}
           currentPageNumber={currentPageNumber}
           pageChangeHandler={pageChangeHandler}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <RightNavigation />
        <SearchForm handleKeyDown={handleKeyDown} />
        <PieChart items={items} />
      </Grid.Column>
    </Grid.Row>
    <Helmet title='Posts list'
      meta={[
        { name: 'description', content: 'React application' },
        { name: 'keywords', content: 'thinknetica, react' },
      ]}
    />
  </Grid>
);

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  currentPageNumber: PropTypes.number,
  totalPages: PropTypes.number,
  pageChangeHandler: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

export default BlogPage;
