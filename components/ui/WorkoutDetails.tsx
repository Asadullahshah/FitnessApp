import { Image, View, Dimensions } from "react-native";
import { TitleText } from "./TitleText";
import { Colors } from "@/constants/Colors";
import { SubTitleText } from "./SubTitleText";
import { ButtonRed } from "./ButtonRed";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface WorkoutDetailsProps {
  difficulty: number;
}

const difficultyImages = [
  require("@/assets/images/pushup-difficulty-1.png"),
  require("@/assets/images/pushup-difficulty-2.png"),
  require("@/assets/images/pushup-difficulty-3-correct-orient.png"),
];

const difficultyText = [
  "This workout doesn't care whether you re smashing full reps or starting on your knees, it's here to test your grit. Feel the burn, You've got this! Drop down and give it your best!",
  "Regular push-ups weren't enough for you, huh? You're on the incline, but no coasting here, gravity's still your enemy. Crush these reps, build that strength, and get ready to take it to the floor!",
  "You wanted a challenge? Here it is. These aren't just push-ups, Diamond Pushups are a test of willpower. Lock in, engage every muscle, and push like you mean it!",
];

const muscleImages = [
  require("@/assets/images/chest.png"),
  require("@/assets/images/biceps.png"),
  require("@/assets/images/back.png"),
  require("@/assets/images/shoulder.png"),
];

export const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({
  difficulty,
}) => {
  //   const muscles = Array.from({ length: muscleImages.length });
  return (
    <View>
      <Image
        style={{ width: pxtowidth(390), height: pxtoheight(227)}}
        source={difficultyImages[difficulty - 1]}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: pxtoheight(24),
          marginLeft: pxtowidth(24),
          marginRight: pxtowidth(24),
        }}
      >
        <View
          style={{
            width: pxtowidth(62),
            height: pxtoheight(228),
            backgroundColor: Colors.light.secondary_colors.dark_navy,
            borderRadius: pxtowidth(18),
            justifyContent: "space-around",
          }}
        >
          {muscleImages.map((_, i) => (
            <Image
              key={i}
              source={muscleImages[i]}
              style={{
                width: pxtowidth(30),
                height: pxtoheight(30),
                marginHorizontal: pxtowidth(16),
              }}
            />
          ))}
        </View>
        <View style={{ marginLeft: pxtowidth(16) }}>
          <View
            style={{
              width: pxtowidth(264),
              height: pxtoheight(68),
              backgroundColor: Colors.light.secondary_colors.dark_navy,
              borderRadius: pxtowidth(18),
              padding: 10,
              justifyContent: "center",
            }}
          >
            <TitleText
              size={22}
              style={{ color: Colors.light.primary_colors.soft_white }}
            >
              Push Up, Push me
            </TitleText>
          </View>
          <SubTitleText
            size={12}
            style={{
              color: "#D9D9D9",
              textAlign: "left",
              marginTop: pxtoheight(14),
              width: pxtowidth(264),
              height: pxtoheight(100),
            }}
          >
            {difficultyText[difficulty - 1]}
          </SubTitleText>
        </View>
      </View>
      <SubTitleText
        mTop={66}
        size={12}
        color={Colors.light.primary_colors.mint_green}
        style={{
          textAlign: "left",
          alignSelf: "center",
        }}
      >
        Calories Torched: <SubTitleText size={12}>5 kcal🔥</SubTitleText>
      </SubTitleText>
    </View>
  );
};
