import React from 'react'
import { SpaAssyConnect } from 'spaassy-redux'


const namespace = process.env.SYSTEMNAME

@SpaAssyConnect(namespace)(state => ({ store: state }))
class DemoOne extends React.Component{
	constructor(props){
		super()
	}
	render(){
		return (
				<div>
						这是子系统demo1的内容
						<p>
							这是redux：
						</p>
						<p>
							{this.props.store.testReducer.str}
						</p>
				</div>
		)

	}
}
export default DemoOne