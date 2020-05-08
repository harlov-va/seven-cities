import * as React from 'react';
interface IProps {
    onChange: (sort:string) => void
}
interface IState {
  nameSort:string,
  toggleClass: string,
}

export default class SortingOptions extends React.PureComponent <IProps,IState> {
    constructor(props){
        super(props);
        this.state = {
          nameSort: `Popular`,
          toggleClass: ``,
        }
    }
    _onClickSorting = (evt) => {
      this.setState({nameSort: evt.target.textContent});
      const { onChange } = this.props;
      onChange(evt.target.textContent);
      this.setState({toggleClass:``})
    }
    _onClick = () => {
      if(this.state.toggleClass === `places__options--opened`) {
        this.setState({toggleClass:``})
      } else {
        this.setState({toggleClass:`places__options--opened`})
      }
    }
    render(){    
        const { nameSort, toggleClass } = this.state;        
        return <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={() => this._onClick()}>
          {nameSort}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${toggleClass}`} onClick={(event) => this._onClickSorting(event)}>
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
    }
}