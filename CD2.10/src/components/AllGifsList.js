import * as React from 'react';
import { FlatList } from "react-native";
import { addMultipleGifs, deleteAllGifs } from "../services/GifManagement";
import GifItem from "./GifItem";

function AllGifsList() {
  React.useEffect(() => {
    (async () => {
      await addMultipleGifs(ids);
    })();

    return () => {
      deleteAllGifs();
    };
  }, []);

  const renderItem = (item) => {
    return <GifItem gifId={item.item.gifId} gifName={item.item.gifName} color={item.item.color} />;
  };

  const keyExtractor = (item, index) => {
    item.gifId.toString();
  };
  return (
    <FlatList
      style={{}}
      data={GIFListData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      
    />
  );
}

const GIFListData = [
  { id: 0, gifId: "ICOgUNjpvO0PC", gifName: "Cat №1", color:'#dbd2ce' },
  { id: 1, gifId: "MDJ9IbxxvDUQM", gifName: "Cat №2", color:'#d1c1ba' },
  { id: 2, gifId: "5i7umUqAOYYEw", gifName: "Cat №3", color:'#ede8e6' },
  { id: 3, gifId: "q1MeAPDDMb43K", gifName: "Cat №4", color:'#9e928d'  },
  { id: 4, gifId: "GeimqsH0TLDt4tScGw", gifName: "Cat №5", color:'#f7ede9' },
  { id: 5, gifId: "3nbxypT20Ulmo", gifName: "Cat №6", color:'#967162' },
  { id: 6, gifId: "GwGXoeb0gm7sc", gifName: "Cat №7", color:'#ad7863' },
];

const ids = GIFListData.map((item) => item.gifId);

export default AllGifsList;