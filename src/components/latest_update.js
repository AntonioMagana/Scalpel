//import faker from 'faker';
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: '1983, orders, $4220',
    time: '21 Feb 2021 21:25',
    type: 'order1'
  },
  {
    title: '12 Invoices have been paid',
    time: '21 Feb 2021 21:25',
    type: 'order2'
  },
  {
    title: 'Order #37745 from September',
    time: '21 Feb 2021 21:25',
    type: 'order3'
  },
  {
    title: 'New order placed #XF-2356',
    time: '21 Feb 2021 21:25',
    type: 'order4'
  },
  {
    title: 'New order placed #XF-2346',
    time: '21 Feb 2021 21:25',
    type: 'order5'
  }
];

// ----------------------------------------------------------------------
export default function Latest_update() {
  return (
    <Card>
      <CardHeader title="Latest Updates" />
      <CardContent>
        <Timeline sx= {{
         bgcolor: '#fff',
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none'
          }}}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>[Amazon]"NVIDIA 3070" added</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>[Amazon]"Xbox Series X" added</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>[Best Buy]"PlayStation 5" added</TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  );
}
