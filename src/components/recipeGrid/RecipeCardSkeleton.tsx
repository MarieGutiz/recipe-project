import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const RecipeCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={180}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default RecipeCardSkeleton;
