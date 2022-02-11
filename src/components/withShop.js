import React, { Component } from 'react';

const withShop = (WrappedComponent) => {
    
    class WithShop extends React.Component {

        constructor(props) {
            super(props)
            this.state = {item:'',items : ''};
            this.addItem = this.addItem.bind(this);
            this.setItem = this.setItem.bind(this);
            this.itemRef = React.createRef();
        }

        setItem(event){
            this.setState({item: event.target.value});
        }

        addItem (){
            this.setState({items: [...this.state.items, this.state.item]});
            this.setState({item: ''});
        }

        componentDidMount(){
            this.itemRef.current.focus();
        }

        render() {

            const { items, item } = this.state;

            return (
                <div className='container'>
                    <div className='row'>
                        <h5>Total items in List {items.length}</h5>
                        {items && items.map((itm, ind) => 
                            <p key={ind}>Name: {itm}</p>
                        )}
                    </div>
                    <div className='col'>
                        <input 
                            ref={this.itemRef}
                            type="text" 
                            value={item} 
                            onChange={(e) => this.setItem(e)} 
                        />
                    </div>
                    <WrappedComponent addItem={this.addItem} items={items} />
                </div>
            );
        }
    }
    return WithShop;
}

export default withShop;