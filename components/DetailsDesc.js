import { View, Text } from "react-native";
import React, { useState } from "react";

import { NFTPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <NFTPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            fontSize: SIZES.font,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              fontSize: SIZES.small,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                fontSize: SIZES.small,
              }}
              onPress={() => {
                if (!readMore) {
                  setReadMore(true);
                  setText(data.description);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
