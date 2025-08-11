import { Timeline, Text, Card } from "@mantine/core";
import React from "react";
import { PortfolioItem } from "types";

export default function WorkTimeline(): React.JSX.Element {
  const workItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Associate Software Engineer at Red Hat",
      description:
        "Contributed to the OpenShift AI Dashboard and upstream to Kubeflow by contributing code, engaging in UX discussions, patching bugs, leading epics, showing demos, and participating in code reviews. Added new features such as RWX configurable persistent volume claims, clearer workbench updating processes, page components, terminology renaming, configuration alerts, and a UI wrapper around our AI-focused pipeline. Increased code quality by refactoring MLMD calls, removing unnecessary hooks, overhauling 403 handling, improving permission testing methods, crafting unit and mock tests, and adding pass-through Kubernetes calls. Helped with our initiative towards adopting a modular architecture, which empowers us to share code with the upstream, while also allowing us to add custom features through the use of extensions and plugins. Was the primary onboarding buddy for new team members, and is currently mentoring an intern on the team.",
      date: "December 2024 - Present",
    },
    {
      id: "2",
      title:
        "Software Engineer Intern - OpenShift AI Dashboard Team at Red Hat",
      description:
        "Engineered bug fixes for multiple parts of the dashboard, including pipeline and workbench errors, authorization vulnerabilities, CI test failures, and general UI bugs. Added Cypress end-to-end tests, created test functionality for intercepting MLMD requests, designed unit tests, improved repository-wide type definitions and narrowing, and configured ESLint rules which improved overall code quality and test coverage.",
      date: "May 2024 - August 2024",
    },
    {
      id: "3",
      title: "Software Engineer Intern - ConsoleDot Team at Red Hat",
      description:
        "Constructed webpages, generated search indices, improved form rendering, increased viewport responsiveness, and made cleaner UIs in the Red Hat Hybrid Cloud Console website. Developed validation scripts for Kafka requests and JSON files and crafted Cypress end-to-end unit tests for web pages. These efforts successfully identified bugs and bolstered backend and frontend reliability.",
      date: "May 2023 – July 2023",
    },
    {
      id: "4",
      title: "Undergraduate Teaching Assistant at University of Virginia",
      description:
        "Graded assignments and held office hours for a software development class containing over 481 students.",
      date: "August 2023 – December 2023",
    },
  ];
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h1 className="text-3xl text-center pb-6">Work Experience</h1>
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        {workItems.map((item, idx) => {
          return (
            <Timeline.Item key={idx} title={item.title}>
              <Text c="dimmed" size="sm">
                {item.description}
              </Text>
              <Text size="xs" mt={4}>
                {item.date}
              </Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Card>
  );
}
