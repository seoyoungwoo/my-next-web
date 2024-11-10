import internal from "stream";

export default function Home(){
  return(
    <div>
      <MyButton name="영우" nickname="졸려요" age = {18} today = {new Date()}/>
    </div>
  );
}



type TParams = {
  name: string
  nickname: string
  age: number
  today: Date
}


function MyButton(params: TParams){
  return (<div className = 'bg-red-500 text-xl w-[100px]'>
    I am {params.name}. my nickname is {params.nickname} and my age is {params.age} 
    Today is {params.today.getDate()}
    </div>)
}