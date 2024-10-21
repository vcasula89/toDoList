import {removeActivity} from '../../service/activityService.js'
import activityNormalizer from '../../normalizer/activityNormalizer.js';

export default async (req, res) => {
    const activityId = req.params['id'];
    const activity = await removeActivity(activityId)

    if (activity) {
        res.status(200).json(activityNormalizer(activity))
    } else {
        res.status(500).json({ message: 'server error' })
    }
}