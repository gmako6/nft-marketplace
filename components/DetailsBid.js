import { View, Image, Text } from "react-native";
import React from "react";

import { NFTPrice } from "./SubInfo";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <NFTPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
