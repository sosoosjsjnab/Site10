import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Interesting notes from the history of aviation development
			</title>
			<meta name={"description"} content={"Interesting notes from the history of aviation development"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/Qatar_A350_A7-ALA_FRA_2014-01-15_04cr.jpg?v=2020-12-10T00:42:26.709Z"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						Interesting notes from the history of aviation development
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/1114335.jpg?v=2020-12-10T00:42:26.690Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/Qatar_A350_A7-ALA_FRA_2014-01-15_04cr.jpg?v=2020-12-10T00:42:26.709Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/DC-6B_nose_landing_gear.jpg?v=2020-12-10T00:42:26.702Z) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Everyone knows that the Wright brothers made the world's first flight in an airplane they created themselves. The history of aircraft construction is forever associated with these inventors, with their names, and they began their journey into the sky with the construction of kites. Even as a boy, the brothers were engaged in the kite lovers club and surpassed other members of the club with their designs. Moreover, their skill reached such a height that other guys began to buy their kites. This childhood hobby led the Wright brothers to the idea of ​​a man's flight in a controlled machine. The construction of the first airfield in Russia began in 1909. In the magazine "Bulletin of aeronautics" in 1911, they wrote about it as follows: It remains to add that this airfield was built on the outskirts of Kiev. And by the beginning of the First World War, Russia had about 25 airfields. In Kiev, in May 1910, the first aircraft took off, which was completely made of domestic materials. Its designer - Professor A. Kudashev, piloted his "brainchild" himself. Aeroflot's predecessor was Dobrolet, created in 1923 to help aviation. The shareholders of this society were both state and public organizations, and individual citizens. The newspapers of that time urged workers to invest feasible funds in aircraft construction, so as not to buy flying machines abroad. The goal of Dobrolet was to organize passenger traffic between Russian cities.
			</Text>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				In the USSR{"\n\n"}
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				First air terminal began operation on November 8, 1931 at the Moscow Central Airfield. In size, it was not inferior to (and in many respects even surpassed) foreign air terminals. On May 15, 1930, the world's first flight attendant Ellen Church, a former nurse, began work at United Airlines (American airline). The duties of a flight attendant at that time were quite extensive, so Ellen Church's easy service cannot be called. In addition to serving passengers in flight, she needed to carry their luggage, refuel the plane and help the pilot take the flying car out of the hangar. During the Great Patriotic War, partisans carried out an operation to rescue the children of an orphanage in Polotsk (the Nazis were preparing to take blood from them for their wounded). But, it is clear that the guys could not be kept in the detachment, but should have been taken to the rear to their own.
			</Text>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
					>
						This task was assigned to civilian pilots. Each such flight into territory occupied by the enemy was very dangerous and took place under enemy fire. The children were placed in so-called cassettes (large canvas bags) suspended from the wings. The last transportation ended with the death of the pilot. A Messerschmitt flew over his P-5 - flames burst out of the cockpit, sparks flew, clothes on the children began to smolder, and the pilot's overalls caught fire. However, Alexander Mamkin (that was the name of the pilot) managed to land the plane engulfed in flames in the rear of his own, and they barely managed to take the children away from the burning car when the gas tank exploded. The children survived, but the pilot could not be saved. In the history of Russian aviation, there are many cases of heroism shown by pilots in extreme situations.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/C-9NUiVXcAAjPA1.jpg?v=2020-12-10T00:42:26.689Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/36603a7c09f5d6da232661271cae28f2.jpg?v=2020-12-10T00:42:26.688Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd16e6bf8ae59001fb0e1d3/images/work.jpg?v=2020-12-10T00:42:26.688Z) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Flying crane{"\n\n\n\n"}
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Builders call the helicopter a "flying crane." Very often you cannot do without his help. For the first time in history, the helicopter was involved in installation work in 1959 when the Simferopol-Alushta trolleybus line was laid in Crimea. On those steep mountain slopes, where it was impossible to climb other equipment, MI-4 delivered and installed on the foundation of the power transmission line.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
					>
						Contact us
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="260px">
						Watercirkel 105 Amstelveen, Noord-Holland(NH), 1186 NA 06-81188288
					</Text>
				</StackItem>
				<StackItem md-width="100%" />
			</Stack>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--lead" margin="20px 0 0 0" text-align="center">
				<Link href="/terms">
					Terms And Conditions
				</Link>
				{" "}-{" "}
				<Link
					href="/privacy"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Privacy Policy
				</Link>
				{" "}-{" "}
				<Link
					href="/cookies"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Cookies
				</Link>
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});