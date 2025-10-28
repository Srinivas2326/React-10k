

const ListRender = ()=>{
    const names = ["srinivas", "tom", "jerry"]
    const arrayobj = [{name: "srinu", age:23}, {name: "vicky", age:22}, {name:"shekar", age:20}]
    return<>
        
            {names.map((value,index)=><p key={index}>name is {value}</p>)}
            {arrayobj.map((value,index)=><h1 key={index}>name of person is {value.name} and age is {value.age}</h1>)}
    </>
}

export default ListRender