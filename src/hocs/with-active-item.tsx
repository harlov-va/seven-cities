import * as React from 'react';
interface IProps {
    onChangeSorting: (sort:string) => void,
}

interface IState {
    nameSort:string,
    toggleClass: string,
} 

const withActiveItem = (Component):any => {
    class WithActiveItem extends React.PureComponent<IProps, IState> {
        public handleToggleClick: (event:any) => void;
        public handleOptionClick: (event:any) => void;
        constructor(props){
            super(props);
            this.state = { 
                nameSort: `Popular`,               
                toggleClass: ``,
            }
            this.handleToggleClick = this.onClickElement.bind(this);
            this.handleOptionClick = this.onClickSorting.bind(this);
        }
        onClickSorting = (evt) => {            
            this.setState({
                nameSort: evt.target.textContent,                
                toggleClass:``,
            });
            const { onChangeSorting } = this.props;
            onChangeSorting(evt.target.textContent);
          }
        onClickElement = () => {            
            if(this.state.toggleClass === `places__options--opened`) {
              this.setState({toggleClass:``})
            } else {
              this.setState({toggleClass:`places__options--opened`})
            }
          }
        render() {
        
        return <Component
            {...this.props}
            nameSort={this.state.nameSort}
            toggleClass={this.state.toggleClass}
            onClickElement={this.handleToggleClick}
            onClickOption={this.handleOptionClick}
        />;
        }
    }
    return WithActiveItem;
}

export default withActiveItem;