import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Data, HomeProps} from '../types';

type tableProps = {
  el: Data[];
  tp: number;
  curr: number;
  setDp: (val: number) => void;
  nav: HomeProps;
};

const Table = ({el, tp, curr, setDp, nav}: tableProps) => {
  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Url</DataTable.Title>
          <DataTable.Title>Created at</DataTable.Title>
          <DataTable.Title>Author</DataTable.Title>
        </DataTable.Header>

        {el?.map((e, i) => {
          return (
            <TouchableOpacity
              key={e.objectID}
              onPress={() => {
                console.log(e);
                nav.navigation.navigate('About', {data: e});
              }}>
              <DataTable.Row>
                <DataTable.Cell>{e.title}</DataTable.Cell>
                <DataTable.Cell>{e.url}</DataTable.Cell>
                <DataTable.Cell>{e.created_at}</DataTable.Cell>
                <DataTable.Cell>{e.author}</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          );
        })}

        <DataTable.Pagination
          page={curr}
          numberOfPages={tp}
          onPageChange={page => {
            setDp(page);
          }}
          label={`Page ${(
            curr + 1
          ).toString()} of total ${tp.toString()} pages`}
        />
      </DataTable>
    </ScrollView>
  );
};

export default Table;

const styles = StyleSheet.create({});
