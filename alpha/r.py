import torch
import torchvision
import torchvision.transforms as transforms
import torch.nn as nn
import torch.nn.functional as F

# start


if __name__ == "__main__":
    train_set = 0
    train_loader = 0
    batch_size = 10
    train_set  = torchvision.datasets.FashionMNIST(
        root='./data/FashionMNIST'
        ,train=True
        ,transform=transforms.Compose([
            transforms.ToTensor()
        ])
    )

    train_loader = torch.utils.data.DataLoader(train_set, batch_size=batch_size)
    images, labels = next(iter(train_loader))
    print(images.shape)