import { Card, Text } from "@mantine/core";
import React from "react";

export default function AboutMe() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h1 className="text-3xl text-center pb-6">
            About Me
        </h1>
        <Text size="md">
            Hi! I'm a fourth-year Computer Science student at the University of Virginia! Through my work and educational
            experiences, I've gained exposure to a variety of fields from full stack development to artifical intelligence
            and statistics. Plus, I'm taking a class right now called "Alien Worlds." 10/10 highly recommend.
            <br /><br />
            When I'm not in front of a code editor, I like learning Chinese and German on Duolingo, watching tv shows on Netflix, 
            going to the gym, playing pickleball, and reading. 
        </Text>
        </Card>
    );
}