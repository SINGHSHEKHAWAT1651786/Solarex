const Section = ({title, description }) =>{
    return(
        <div className="border  border-black p-2 m-2">
        <h3>{title}</h3>
        <p>{description}</p>    
            </div>

        
        
    );
};
const Instamart = () =>{
return(
    <div>
        <h1 className="text-3l p-2">Instamart</h1>
        <Section title ={ 'About Instamart'}
        description = {'This is the about section of the Instamart'}/>
    </div>
);
};
export default Instamart;