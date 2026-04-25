import {Box, Button, MenuItem, Select, Stack, Typography} from "@mui/material";
import {RaceEnum} from "../../DataObjects/enums/RaceEnum.tsx";
import {ArtisanToolEnum} from "../../DataObjects/enums/ArtisanToolEnum.tsx";
import {VehicleTypeEnum} from "../../DataObjects/enums/VehicleTypeEnum.tsx";
import {MiscToolsEnum} from "../../DataObjects/enums/MiscToolsEnum.tsx";
import {useState} from "react";
import {ProfessionEnum} from "../../DataObjects/enums/ProfessionEnum.tsx";
import {BackgroundEnum} from "../../DataObjects/enums/BackgroundEnum.tsx";

function ProficiencySelect({
    selectedOrigin,
    selectedProfession,
    setProficiency,
    stepForward,
    stepBackward
}) {

    const [humanSelection, setHumanSelection] = useState(null);
    const [variantSelection, setVariantSelection] = useState(null);
    const [professionSelectionOne, setProfessionSelectionOne] = useState(null);
    const [professionSelectionTwo, setProfessionSelectionTwo] = useState(null);
    const [backgroundSelectionOne, setBackgroundSelectionOne] = useState(null);
    const [backgroundSelectionTwo, setBackgroundSelectionTwo] = useState(null);
    const [backgroundSelectionThree, setBackgroundSelectionThree] = useState(null);

    function apply ()  {
        let filteredProficiencies = [
            humanSelection,
            variantSelection,
            professionSelectionOne,
            professionSelectionTwo,
            backgroundSelectionOne,
            backgroundSelectionTwo,
            backgroundSelectionThree
        ].filter(str => str);
        setProficiency(filteredProficiencies)
        stepForward()
    }


    const handleHumanSelectionChange = (event) => {
        setHumanSelection(event.target.value);
    }

    const variantSelectionChange = (event) => {
        setVariantSelection(event.target.value);
    }

    const handleProfessionSelectionOneChange = (event) => {
        setProfessionSelectionOne(event.target.value);
    }

    const handleProfessionSelectionTwoChange = (event) => {
        setProfessionSelectionTwo(event.target.value);
    }

    const handleBackgroundSelectionOneChange = (event) => {
        setBackgroundSelectionOne(event.target.value);
    }

    const handleBackgroundSelectionTwoChange = (event) => {
        setBackgroundSelectionTwo(event.target.value);
    }

    const handleBackgroundSelectionThreeChange = (event) => {
        setBackgroundSelectionThree(event.target.value);
    }

    const artisanTools = [
        ArtisanToolEnum.AlchemistSupplies,
        ArtisanToolEnum.CartographerTools,
        ArtisanToolEnum.CookingSupplies,
        ArtisanToolEnum.CybersmithsTools,
        ArtisanToolEnum.DemolitionTools,
        ArtisanToolEnum.DigitalTechnicianTools,
        ArtisanToolEnum.GunsmithTools,
        ArtisanToolEnum.MetalworkerTools,
        ArtisanToolEnum.TailoringSupplies,
    ]

    const vehicleTypes = [
        VehicleTypeEnum.Bike,
        VehicleTypeEnum.Car,
        VehicleTypeEnum.Hovercar,
        VehicleTypeEnum.HugeBeast,
        VehicleTypeEnum.Hydrofoil,
        VehicleTypeEnum.Landover,
        VehicleTypeEnum.LargeBeast,
        VehicleTypeEnum.Waterbike,
    ]

    const instrumentTypes = [
        MiscToolsEnum.MusicElectronicKeyboard,
        MiscToolsEnum.MusicLargeBrass,
        MiscToolsEnum.MusicSmallBrass,
        MiscToolsEnum.MusicString,
        MiscToolsEnum.MusicWoodwind
    ]

    const gamingTypes = [
        MiscToolsEnum.GamingSetKitDice,
        MiscToolsEnum.GamingSetKitCards,
        MiscToolsEnum.GamingSetKitDigital,
    ]


    function SelectHumanTool(race) {
        //human - one tool or vehicle
        const selections = [
            ...artisanTools,
            ...instrumentTypes,
            ...gamingTypes,
            ...vehicleTypes
        ].filter(option =>
            option !== variantSelection
            && option !== professionSelectionOne
            && option !== professionSelectionTwo
            && option !== backgroundSelectionOne
            && option !== backgroundSelectionTwo
            && option !== backgroundSelectionThree
        )
        return(
            <Box>
                <Typography>Human Bonus Proficiency</Typography>
                <br/>
                <Select
                    fullWidth={true}
                    size={"small"}
                    value={humanSelection}
                    onChange={handleHumanSelectionChange}
                    variant={"standard"}>
                    {selections.map((option) => (
                        <MenuItem value={option} key={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
                <br/>
            </Box>
        )
    }

    function VariantBonusTool() {
        const selections = [
            ...artisanTools,
            ...instrumentTypes,
            ...vehicleTypes,
        ].filter(option =>
            option !== humanSelection
            && option !== professionSelectionOne
            && option !== professionSelectionTwo
            && option !== backgroundSelectionOne
            && option !== backgroundSelectionTwo
            && option !== backgroundSelectionThree
        )
        return(
            <Stack spacing={2}>
                <Typography>Utopian Bonus Proficiency</Typography>
                <Select
                    fullWidth={true}
                    size={"small"}
                    value={variantSelection}
                    onChange={variantSelectionChange}
                    variant={"standard"}>
                    {selections.map((option) => (
                        <MenuItem value={option} key={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </Stack>
        )
    }

    function BackgroundTool() {
        let selectionOptionsOne = []
        let selectionOptionsTwo = []
        let selectionOptionsThree = []
        if(selectedOrigin.background === BackgroundEnum.Acolyte) {
            selectionOptionsOne = [...artisanTools]
            selectionOptionsTwo = [...instrumentTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Celebrity) {
            selectionOptionsOne = [MiscToolsEnum.DisguiseKit]
            selectionOptionsTwo = [...gamingTypes, ...instrumentTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Crafter) {
            selectionOptionsOne = [...artisanTools]
            selectionOptionsTwo = [...artisanTools]
        } else if (selectedOrigin.background === BackgroundEnum.Drifter){
            selectionOptionsOne = [...gamingTypes, ...instrumentTypes]
            selectionOptionsTwo = [...vehicleTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Investigator) {
            selectionOptionsOne = [MiscToolsEnum.DisguiseKit]
            selectionOptionsTwo = [...vehicleTypes, ...instrumentTypes]
        } else if (selectedOrigin.background === BackgroundEnum.LocalHero) {
            selectionOptionsOne = [...artisanTools]
            selectionOptionsTwo = [...vehicleTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Outlander) {
            selectionOptionsOne = [...artisanTools]
            selectionOptionsTwo = []
        } else if (selectedOrigin.background === BackgroundEnum.Outlaw) {
            selectionOptionsOne = [MiscToolsEnum.DisguiseKit, MiscToolsEnum.ForgeryKit]
            selectionOptionsTwo = [gamingTypes, ...instrumentTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Patrician) {
            selectionOptionsOne = [MiscToolsEnum.DisguiseKit]
            selectionOptionsTwo = [gamingTypes, ...instrumentTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Pilot) {
            selectionOptionsOne = [...vehicleTypes]
            selectionOptionsTwo = [...vehicleTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Scholar) {
            selectionOptionsOne = [...artisanTools]
            selectionOptionsTwo = [...artisanTools]
            selectionOptionsThree = [...gamingTypes, ...instrumentTypes, ...vehicleTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Soldier) {
            selectionOptionsOne = [...artisanTools]
            selectionOptionsTwo = [...vehicleTypes]
        } else if (selectedOrigin.background === BackgroundEnum.Techie) {
            selectionOptionsOne = [ArtisanToolEnum.CybersmithsTools, ArtisanToolEnum.DigitalTechnicianTools, MiscToolsEnum.HackerKit]
        } else if (selectedOrigin.background === BackgroundEnum.Wayfarer) {
            selectionOptionsOne = [MiscToolsEnum.ForgeryKit, MiscToolsEnum.HackerKit, MiscToolsEnum.InfiltrationTools]
            selectionOptionsTwo = [...vehicleTypes]
        }


        selectionOptionsOne = selectionOptionsOne
            .filter(option =>
                option !== humanSelection
                && option !== variantSelection
                && option !== professionSelectionOne
                && option !== professionSelectionTwo
                && option !== backgroundSelectionTwo
                && option !== backgroundSelectionThree
            )
        selectionOptionsTwo = selectionOptionsTwo
            .filter(option =>
                option !== humanSelection
                && option !== variantSelection
                && option !== professionSelectionOne
                && option !== professionSelectionTwo
                && option !== backgroundSelectionOne
                && option !== backgroundSelectionThree
            )

        selectionOptionsThree = selectionOptionsThree
            .filter(option =>
                option !== humanSelection
                && option !== variantSelection
                && option !== professionSelectionOne
                && option !== professionSelectionTwo
                && option !== backgroundSelectionOne
                && option !== professionSelectionTwo
            )


        return (
            <Stack spacing={2}>
                <p> background options</p>
                <Select
                    variant={'standard'}
                    size="small"
                    fullWidth={true}
                    value={backgroundSelectionOne}
                    onChange={handleBackgroundSelectionOneChange}>
                    {selectionOptionsOne.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
                {selectionOptionsTwo !== [] && (
                    <Select
                        variant={'standard'}
                        size="small"
                        fullWidth={true}
                        value={backgroundSelectionTwo}
                        onChange={handleBackgroundSelectionTwoChange}>
                        {selectionOptionsTwo.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                )}
                {selectedOrigin.background === BackgroundEnum.Scholar && (
                    <Select
                        variant={'standard'}
                        size="small"
                        fullWidth={true}
                        value={backgroundSelectionThree}
                        onChange={handleBackgroundSelectionThreeChange}>
                        {selectionOptionsThree.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                )}
            </Stack>
        )
    }

    function ProfessionTool() {
        let selectionsOptionOne = []
        if(selectedProfession !== ProfessionEnum.Operative) {
            selectionsOptionOne = [...artisanTools]
        } else {
            selectionsOptionOne = [MiscToolsEnum.InfiltrationTools]
            setProfessionSelectionOne(MiscToolsEnum.InfiltrationTools)
        }
        selectionsOptionOne = selectionsOptionOne
            .filter(option =>
                option !== humanSelection
                && option !== variantSelection
                && option !== professionSelectionTwo
                && option !== backgroundSelectionOne
                && option !== backgroundSelectionTwo
                && option !== backgroundSelectionThree
            )

        let selectionsOptionTwo = []
        if(
            selectedProfession === ProfessionEnum.Guardian ||
            selectedProfession === ProfessionEnum.Hunter ||
            selectedProfession === ProfessionEnum.Warrior
        ) {
            selectionsOptionTwo = [...vehicleTypes]
        } else if (selectedProfession === ProfessionEnum.Mystic) {
            selectionsOptionTwo = [...vehicleTypes, ...instrumentTypes]
        } else if (selectedProfession === ProfessionEnum.Savant) {
            selectionsOptionTwo = [...gamingTypes, ...vehicleTypes, ...instrumentTypes]
        } else if (selectedProfession === ProfessionEnum.Operative) {
            selectionsOptionTwo = [...gamingTypes, ...vehicleTypes, ...instrumentTypes]
        } else if (selectedProfession === ProfessionEnum.Thaumaturge) {
            selectionsOptionTwo = [...gamingTypes, ...instrumentTypes]
        }
        selectionsOptionTwo = selectionsOptionTwo
            .filter(option =>
                option !== humanSelection
                && option !== variantSelection
                && option !== professionSelectionOne
                && option !== backgroundSelectionOne
                && option !== backgroundSelectionTwo
                && option !== backgroundSelectionThree

            )


        return(
            <Stack spacing={2}>
                <Typography>Profession Tool</Typography>
                <Select
                    variant={'standard'}
                    size="small"
                    fullWidth={true}
                    value={professionSelectionOne}
                    onChange={handleProfessionSelectionOneChange}>
                    {selectionsOptionOne.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
                <Select
                    variant={'standard'}
                    size="small"
                    fullWidth={true}
                    value={professionSelectionTwo}
                    onChange={handleProfessionSelectionTwoChange}>
                    {selectionsOptionTwo.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </Stack>
        )
    }

    return (
        <Stack spacing={4}>
            <ProfessionTool/>
            <BackgroundTool/>
            { selectedOrigin.race === RaceEnum.Human && (
                <SelectHumanTool/>
            )}
            {selectedOrigin.background === BackgroundEnum && (
                <VariantBonusTool/>
            )}
            <Stack spacing={2} direction={'row'}>
                <Button
                    onClick={() => stepBackward()}
                    variant={"contained"}
                    color={"secondary"}>Back</Button>
                <Button
                    onClick={() => {apply()}}
                    variant={"contained"}>Accept</Button>
            </Stack>
        </Stack>
    )
}

export default ProficiencySelect;