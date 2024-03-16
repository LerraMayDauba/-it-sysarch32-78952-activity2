import Student from "./Student";

function Content() {
    const data = [
        {
          image: "https://i.mydramalist.com/1kJ15_5f.jpg",
          name: "Lerra May Dauba",
          email: "lerramaydauba@gmail.com"
        },
        {
          image: "https://i.mydramalist.com/1kJ15_5f.jpg",
          name: "Lerra May Dauba",
          email: "lerramaydauba@gmail.com"
        },
        {
          image: "https://i.mydramalist.com/1kJ15_5f.jpg",
          name: "Lerra May Dauba",
          email: "lerramaydauba@gmail.com"
        },
        {
          image: "https://i.mydramalist.com/1kJ15_5f.jpg",
          name: "Lerra May Dauba",
          email: "lerramaydauba@gmail.com"
        },
        {
          image: "https://i.mydramalist.com/1kJ15_5f.jpg",
          name: "Lerra May Dauba",
          email: "lerramaydauba@gmail.com"
        }
      ];
      
      
  return (
    <div className="grid">
      {data.map(student => {
        return <Student key={student.name} student={student} />
      })}
    </div>
  )
}

export default Content


