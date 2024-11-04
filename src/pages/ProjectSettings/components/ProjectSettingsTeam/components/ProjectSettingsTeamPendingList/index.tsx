import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ListContainer from "components/ListContainer";
import useDeleteDialog from "hooks/useDeleteDialog";
import useTeamPendingList, { key } from "hooks/useTeamPendingList";
import CloseIcon from "icons/CloseIcon";
import React from "react";
import { apiClient } from "utils/axios";
import { cssColor } from "utils/colors";

export default function ProjectSettingsTeamPendingList() {
  const queryClient = useQueryClient();
  const { isFetching, data, error } = useTeamPendingList();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (memberId: number) => {
      return await apiClient.post(`/cancel-invitation/${memberId}`);
    },
  });

  const { component, handleDelete } = useDeleteDialog(mutateAsync, {
    isPending,
    onAfterDelete: () => queryClient.invalidateQueries({ queryKey: [key] }),
  });

  return (
    <>
      {component}
      <ListContainer
        loading={isFetching}
        count={data?.length}
        error={error?.message}
        emptyText={"No pending invitation!"}
      >
        <Paper>
          <List>
            {data?.map((member, index) => (
              <React.Fragment key={member.id}>
                {index > 0 && <Divider />}
                <ListItem>
                  <ListItemText
                    primary={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        {member.username}
                      </Box>
                    }
                    secondary={member.email}
                  />
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<CloseIcon fontSize={16} />}
                      onClick={() => handleDelete(member.id)}
                      sx={{
                        color: cssColor("error"),
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </ListContainer>
    </>
  );
}