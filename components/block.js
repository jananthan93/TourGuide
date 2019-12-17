import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import * as theme from './theme';
export default class Block extends Component {
    render() {
        const {
            style,
            color,
            middle,
            left,
            right,
            card,
            shadow,
            center,
            space,
            column,
            row,
            children,
            flex,
             ...props
            } = this.props;

        const blockStyles=[
            style,
            flex && {flex},
            flex === false && {flex:0},
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            left && styles.left,
            right && styles.right,
            space && {justifyContent:`space-${space}`},
            card && styles.card,
            shadow && styles.shadow,
            color && styles[color],//pre defined styles color for background color
            color && styles[color] && {color}, //custom backgroundColor
        ]
        return (
            <View style={blockStyles}{...props}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  card:{
    borderRadius:theme.sizes.border
  },
  shadow:{
    shadowColor:theme.colors.black,
    shadowOffset:{width:1,height:1},
    shadowOpacity:1,
    shadowRadius:10
  },
  row:{
    flexDirection:'row'
  },
  column:{
    flexDirection:'column'
  },
  center:{
      alignItems:'center'
  },
  middle:{
    justifyContent:'center'
  },
  right:{
    justifyContent:'flex-end'
  },
  left:{
    justifyContent:'flex-start'
  },
  accent:{backgroundColor:theme.colors.accent},
  secondary:{ backgroundColor:theme.colors.secondary},
  primary:{backgroundColor:theme.colors.primary},
  tertiary:{backgroundColor:theme.colors.tertiary},
  black:{backgroundColor:theme.colors.black},
  white:{backgroundColor:theme.colors.white},
  gray:{backgroundColor:theme.colors.gray},
  gray2:{backgroundColor:theme.colors.gray2},

});