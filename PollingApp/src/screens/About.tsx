import {Map} from 'immutable';
import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import JSONTree from 'react-native-json-tree';
import {AboutProps} from '../types';

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {margin: 10},
});

const About = (props: AboutProps) => {
  const {data} = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <JSONTree data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
