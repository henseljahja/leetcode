package invertbinarytree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	tmpRightNode := root.Right
	root.Right = invertTree(root.Left)
	root.Left = invertTree(tmpRightNode)
	return root
}
