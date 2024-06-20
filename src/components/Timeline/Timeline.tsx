import { Timeline, Text, Card, CardSection } from '@mantine/core';
import React from 'react';
import { PortfolioItem } from 'types';

export default function WorkTimeline() {
    const workItems: PortfolioItem[] = [
        {
            id: "1",
            title: "Software Engineer Intern - Openshift AI Dashboard Team",
            description:
            "Fixed bugs, added Cypress end to end tests, and configured eslint rules which drastically improved overall code quality in the Red Hat Openshift AI Dashboard website.",
            date: "May 2024 - Present"
        },
        {
            id: "2",
            title: "Software Engineer Intern - ConsoleDot Team",
            description:
            "Constructed webpages, generated search indices, improved form rendering, increased viewport reliability, and made cleaner UIs in the Red Hat Hybrid Cloud Console website.",
            date: "May 2023 – July 2023"
        },
        {
            id: "3",
            title: "CS Teaching Assistant at University of Virginia",
            description:
            "Graded assignments and held office hours for a class of over 440 students.",
            date: "August 2023 – December 2023"
        },
    ];
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
    <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl"
          style={{ textAlign: "center", color: "black", paddingTop: "10px" }}
        >
          Work Experience
     </h1>
    <Timeline active={3} bulletSize={24} lineWidth={2}>
      {workItems.map((item) => {
            return (
                <Timeline.Item title={item.title}>
                    <Text c="dimmed" size="sm">{item.description}</Text>
                    <Text size="xs" mt={4}>{item.date}</Text>
                </Timeline.Item>
            )
        })
      }
    </Timeline>
    </Card>
  );
}