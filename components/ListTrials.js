import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

const list = [
  {'id': 1, 'name': 'name1', 'group': 'group1'},
  {'id': 2, 'name': 'name2', 'group': 'group2'},
  {'id': 3, 'name': 'name3', 'group': 'group3'},
  {'id': 4, 'name': 'name3', 'group': 'group3'},
  {'id': 5, 'name': 'name3', 'group': 'group3'},
  {'id': 6, 'name': 'name3', 'group': 'group3'},
  {'id': 7, 'name': 'name3', 'group': 'group3'},
  {'id': 8, 'name': 'name3', 'group': 'group3'},
  {'id': 9, 'name': 'name3', 'group': 'group3'},
  {'id': 10, 'name': 'name3', 'group': 'group3'},
  {'id': 11, 'name': 'name3', 'group': 'group3'},
  {'id': 12, 'name': 'name3', 'group': 'group3'},
  {'id': 13, 'name': 'name3', 'group': 'group3'},
  {'id': 14, 'name': 'name3', 'group': 'group3'},
  {'id': 15, 'name': 'name3', 'group': 'group3'},
  {'id': 16, 'name': 'name3', 'group': 'group3'}
]

function getList(){
  return list
}
function Review ({id, name, group})
{
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{group}</Text>
    </View>
  )
}
class ListTrials extends Component {
  renderItem = ({item}) => {
    return <Review {...item} />
  }
  render(){
    return(
      /*<ScrollView>
        {getList().map(({id, name, group}) =>
          <Review key={id} id={id} name={name} group={group} />
          )
        }
      </ScrollView>*/
      <View>
        <FlatList
          data={getList()}
          renderItem={this.renderItem}
        ></FlatList>
      </View>
    )
  }
}

export default ListTrials
