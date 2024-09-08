import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Paper, { PaperProps } from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

/*
Design based on:
https://github.com/mui/material-ui/blob/dcc17031aa37b251678c39628b15637ec758d6b4/docs/src/components/about/Team.tsx
*/

export interface Profile {
  name: string;
  /**
   * Role, what are you working on?
   */
  title: string;
  /**
   * Image URL.
   */
  src: string;
  /**
   * Short summary about you.
   */
  about?: string;
  github?: string;
  twitter?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
}

// TODO: dark mode

function Person(props: Profile & { sx?: PaperProps["sx"] }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, height: "100%", ...props.sx }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          // flexWrap: "wrap",
          justifyContent: "space-between",
          // "& > div": { minWidth: "clamp(0px, (150px - 100%) * 999 ,100%)" },
        }}
      >
        {/* MARK: Photo */}
        <Box sx={{ display: "inline-block" }}>
          <Avatar
            variant="rounded"
            imgProps={{
              width: "70",
              height: "70",
              loading: "lazy",
            }}
            src={props.src}
            alt={props.name}
            sx={(theme) => ({
              width: 70,
              height: 70,
              borderRadius: 1,
              border: "1px solid",
              borderColor: "grey.100",
              backgroundColor: "primary.50",
              // ...theme.applyDarkStyles({
              //   backgroundColor: "primary.900",
              //   borderColor: "primaryDark.500",
              // }),
            })}
          />
        </Box>
        {/* MARK: Links */}
        <Box
          sx={{ mt: -0.5, mr: -0.5 }}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"flex-end"}
        >
          {props.github && (
            <IconButton
              aria-label={`${props.name} GitHub profile`}
              component="a"
              href={props.github}
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon fontSize="small" sx={{ color: "grey.500" }} />
            </IconButton>
          )}
          {props.linkedin && (
            <IconButton
              aria-label={`${props.name} LinkedIn profile`}
              component="a"
              href={props.linkedin}
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon fontSize="small" sx={{ color: "grey.500" }} />
            </IconButton>
          )}
          {props.twitter && (
            <IconButton
              aria-label={`${props.name} X profile`}
              component="a"
              href={props.twitter}
              target="_blank"
              rel="noopener"
            >
              <XIcon fontSize="small" sx={{ color: "grey.500" }} />
            </IconButton>
          )}
          {props.instagram && (
            <IconButton
              aria-label={`${props.name} Instagram profile`}
              component="a"
              href={props.instagram}
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="small" sx={{ color: "grey.500" }} />
            </IconButton>
          )}
        </Box>
      </Box>
      <Typography variant="body2" sx={{ fontWeight: "bold", mt: 2, mb: 0.5 }}>
        {props.name}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {props.title}
      </Typography>
      {props.about && <Divider sx={{ my: 1.5 }} />}
      {props.about && (
        <Typography variant="body2" sx={{ color: "text.tertiary" }}>
          {props.about}
        </Typography>
      )}
    </Paper>
  );
}

interface TeamProps {
  data: Profile[];
}

export default function Team(props: TeamProps) {
  return (
    <Grid container spacing={2} my={4}>
      {props.data.map((profile) => (
        <Grid key={profile.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Person {...profile} sx={{ bgcolor: "primaryDark.600" }} />
        </Grid>
      ))}
    </Grid>
  );
}
