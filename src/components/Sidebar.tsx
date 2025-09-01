import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator color="red" position="bottom-end" size={10} withBorder offset={6 }>
            <Avatar
              size="md"
              variant="default"
              radius="xl"
              src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/494520041_1757332181524831_1796567446683412661_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jNFXfQAH0VIQ7kNvwHxX48c&_nc_oc=AdnXlqAHmtZGnTNbN5FVraOdt8EgaJFh5u1bTjWoEVW21TQclHb-HtgtW2s4wI0e7oI&_nc_zt=23&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=REwqiHoGV7b3UvZvKPTeUA&oh=00_AfUhCsi55yc9OZ4S8tz2GTF_V_vyymWV7vu08r5sl_O1Uw&oe=68BB992C"
            />
          </Indicator>
          <Text>User : Thanakorn : Student</Text>


        </Group>
        
      </Box>
    </Stack>
  );
}