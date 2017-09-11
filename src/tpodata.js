const tpodata={//public data
	name:"VUEXT",
	ls:[1,2,3],
	getName(name){
		//异步的实现
		//成功之后回调，commit name数据
		this.name=name
	}
}
tpodata.head={ //part data
	name:"lixiaolong"
}

export default tpodata;