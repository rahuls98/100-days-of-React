import React,{ useState } from 'react';
import { render } from 'react-dom';
import Form from '../components/Form';
import Card from '../components/Card';

const App = () => {
    const [name, setName] = useState({fname:"", lname:""});
    const [min, max] = [1,5];
    const [count, setCount] = useState(1);
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState([]);

    const incCount = (e) => {
        e.preventDefault();
        setCount(prevCount => {
            return (prevCount<max) ? prevCount+1 : max; 
        });
    }

    const decCount = (e) => {
        e.preventDefault();
        setCount(prevCount => {
            return (prevCount>min) ? prevCount-1 : min;

        });
    }

    const addTag = (e) => {
        e.preventDefault();
        setTags([...tags, tag]);
        document.getElementById("access").value = "";
    }

    const removeTag = (t) => {
        var tagsCopy = [...tags];
        tagsCopy.splice(tagsCopy.indexOf(t), 1);
        setTags(tagsCopy);
    }

    return (
        <div className="componentContainer">
            <Form name={name} 
                setName={setName} 
                count={count} 
                incCount={incCount} 
                decCount={decCount} 
                tags={tag}
                setTag={setTag}
                addTag={addTag}
                removeTag={removeTag}
                tags={tags}
            />
            <Card name={name}
                count={count}
                tags={tags}
            />
        </div>
    )
}

render(
    <App/>,
    document.getElementById("root")
);