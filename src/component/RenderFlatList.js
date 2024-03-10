import { View, Text ,FlatList} from 'react-native'
import React from 'react'

const RenderFlatList = ({data, renderItemComponent, isHorizontal}) => {
  return (
    <View>
      <FlatList
            horizontal={isHorizontal}
            style={{ flex: 1, marginTop: 10 }}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderItemComponent(item)}
        />
    </View>
  )
}

export default RenderFlatList