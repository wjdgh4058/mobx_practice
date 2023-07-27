import { useState } from "react";
import "./App.css";
import { useStores } from "./state/Context";
import Card from "./components/Card";
import { observer } from "mobx-react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRate, setNewRate] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  const { MovieStore } = useStores();

  const onRateChange = (value) => {
    setNewRate(value);
  };

  const onModalOk = () => {
    MovieStore.createMovie(newTitle, newRate);
    setNewRate(0);
    setNewTitle("");
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    MovieStore.deleteMovie(id);
  };

  const onExistingRateChange = (id, value) => {
    MovieStore.changeRate(id, value);
  };
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>추가하기</button>
      <div>
        {MovieStore.movies.map((x) => {
          <>
            <Card
              key={x.id}
              title={x.title}
              rate={x.rate}
              onChange={(value) => onExistingRateChange(x.id, value)}
              onDelete={() => onDelete(x.id)}
            ></Card>
          </>;
        })}
      </div>
    </div>
  );
}
export default observer(App);
