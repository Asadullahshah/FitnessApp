import {
  Image,
  Dimensions,
  View,
  ImageSourcePropType,
  ViewStyle,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { TitleText } from "./TitleText";
import { Colors } from "@/constants/Colors";
import { DotIconSvg } from "./DotIconSvg";
import { ItalicText } from "./ItalicText";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface WorkoutTileProps {
  title: string;
  img: ImageSourcePropType;
  dotColor?: string;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export const WorkoutTile: React.FC<WorkoutTileProps> = ({
  title,
  img,
  dotColor,
  style,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: pxtowidth(343),
          backgroundColor: Colors.light.secondary_colors.dark_navy,
          borderRadius: pxtowidth(16),
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: pxtoheight(16),
          gap: pxtowidth(8),
        }}
      >
        <DotIconSvg color={dotColor} style={{ marginTop: pxtoheight(11) }} />
        <TitleText color={Colors.light.primary_colors.soft_white}>
          {title}
        </TitleText>
      </View>
      <Image
        source={img}
        style={{
          marginTop: pxtoheight(16),
          height: pxtoheight(155),
          width: pxtowidth(343),
        }}
      />
      <View
        style={{
          marginVertical: pxtoheight(16),
          alignSelf: "center",
          width: pxtowidth(314),
        }}
      >
        <View
          style={{
            height: pxtoheight(30),
            width: pxtowidth(314),
            backgroundColor: "pink ",
          }}
        ></View>
        <View style={{ marginTop: pxtoheight(4) }}>
          <ItalicText>
            Every legend starts at zero. You're already ahead-keep going!
          </ItalicText>
        </View>
      </View>
    </Pressable>
  );
};
