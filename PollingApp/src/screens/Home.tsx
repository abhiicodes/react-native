import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Data, HomeProps} from './../types/index';
import axios from 'axios';

import TableComponent from '../components/Table';

const Home = (props:HomeProps) => {
  const [data, setData] = useState<Data[][]>([]);
  const getRef = useRef<(pg: number) => void>();
  const [page, setPage] = useState<number>(0);
  const [displayPage, setDisplayPage] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => {
      setPage(page => page + 1);
    }, 10000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    // console.log(page);
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page.toString()}`,
      )
      .then(res => {
        console.log(res.data);
        setData([...data, res.data.hits]);
      });
  }, [page]);

  const handleDisplayChange = (val: number) => {
    setDisplayPage(val);
  };

  return (
    <TableComponent
      el={data[displayPage]}
      tp={data.length}
      curr={displayPage}
      setDp={handleDisplayChange}
      nav={props}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
