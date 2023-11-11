import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">
        Знайти контакт за іменем або прізвищем
      </FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={filterValue}
        placeholder="Haber Serhii"
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
